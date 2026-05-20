#!/bin/zsh
cd "$(dirname "$0")"
echo "Starting Academic Certificate System..."
echo "Open this URL in your browser:"
echo "http://127.0.0.1:4173/?v=progress"
python3 -m http.server 4173
