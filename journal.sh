#!/bin/bash

# Fichier de sortie
OUTPUT_FILE="journal.md"

# En-tête du journal
echo "# Journal de travail" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Tous les commits dans l'ordre chronologique (du plus ancien au plus récent)
COMMITS=$(git rev-list --reverse HEAD)

CURRENT_WEEK_KEY=""
CURRENT_DAY=""

for COMMIT in $COMMITS
do
  # Infos de base
  AUTHOR=$(git --no-pager show -s --format='%an' "$COMMIT")
  DATE_ISO=$(git --no-pager show -s --format='%ad' --date=iso "$COMMIT")
  MESSAGE=$(git --no-pager show -s --format='%s' "$COMMIT")
  SHORT_HASH=$(git rev-parse --short "$COMMIT")

  # On récupère juste la date (AAAA-MM-JJ)
  DATE_ONLY=$(echo "$DATE_ISO" | cut -d' ' -f1)

  # Semaine ISO (année + numéro)
  WEEK_YEAR=$(date -d "$DATE_ONLY" +%G)
  WEEK_NUM=$(date -d "$DATE_ONLY" +%V)
  WEEK_KEY="${WEEK_YEAR}-W${WEEK_NUM}"

  # Si on change de semaine, on ajoute un titre de section
  if [ "$WEEK_KEY" != "$CURRENT_WEEK_KEY" ]; then
    CURRENT_WEEK_KEY="$WEEK_KEY"
    CURRENT_DAY=""  # on reset le jour quand on change de semaine

    # Jour de la semaine (1 = lundi, 7 = dimanche)
    WEEKDAY=$(date -d "$DATE_ONLY" +%u)

    # Calcul du lundi (début de semaine) et du dimanche (fin de semaine)
    WEEK_START=$(date -d "$DATE_ONLY -$((WEEKDAY - 1)) days" +%Y-%m-%d)
    WEEK_END=$(date -d "$DATE_ONLY +$((7 - WEEKDAY)) days" +%Y-%m-%d)

    echo "" >> "$OUTPUT_FILE"
    echo "## Semaine $WEEK_NUM ($WEEK_START → $WEEK_END)" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
  fi

  # Si on change de jour, on ajoute un sous-titre pour ce jour
  if [ "$DATE_ONLY" != "$CURRENT_DAY" ]; then
    CURRENT_DAY="$DATE_ONLY"
    echo "### $DATE_ONLY" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
  fi

  {
    echo "#### Commit $SHORT_HASH"
    echo "**Date :** $DATE_ISO — **Auteur :** $AUTHOR"
    echo ""
    echo "**Message :** $MESSAGE"
    echo ""
    echo "| Fichier | Modifications |"
    echo "|---------|---------------|"
  } >> "$OUTPUT_FILE"

  # Récupération des stats par fichier, sous forme de tableau
  git --no-pager show --stat --pretty=format:'' "$COMMIT" \
    | grep '|' \
    | awk -F'|' '{
        # Nettoyage espaces
        gsub(/^ +| +$/,"",$1);
        gsub(/^ +| +$/,"",$2);
        printf "| %s | %s |\n", $1, $2
      }' >> "$OUTPUT_FILE"

  {
    echo ""
    echo "---"
    echo ""
  } >> "$OUTPUT_FILE"

done
