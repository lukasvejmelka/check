window.registerDataset({
    meta: {
        id: "GAUSS",
        name: "Soustavy rovnic 2",
        description: "GAUSS Gaussova eliminační metoda"
    },
    chapters: [
        {
            title: "Soustavy tří rovnic o třech neznámých",
            color: "text-indigo-400",
            problems: [
                {
                    id: 1,
                    type: "equation",
                    statement: "\\begin{cases} x - y + z = 2 \\\\ 2x + y - z = 1 \\\\ 3x - 2y + 3z = 8 \\end{cases}",
                    answer: "K = \\{[1;\\, 2;\\, 3]\\}",
                    steps: "\\bbox[#fde047, 3px]{\\underline{\\underline{K = \\{[1;\\, 2;\\, 3]\\}}}}"
                },
                {
                    id: 2,
                    type: "equation",
                    statement: "\\begin{cases} x + 3y - 2z = -3 \\\\ 2x - y + z = 6 \\\\ 3x + 2y + z = 5 \\end{cases}",
                    answer: "K = \\{[2;\\, -1;\\, 1]\\}",
                    steps: "\\bbox[#fde047, 3px]{\\underline{\\underline{K = \\{[2;\\, -1;\\, 1]\\}}}}"
                },
                {
                    id: 3,
                    type: "equation",
                    statement: "\\begin{cases} 3x + 6y - 3z = 3 \\\\ x + y + 2z = 9 \\\\ 2y - 3z = -7 \\end{cases}",
                    answer: "K = \\{[2;\\, 1;\\, 3]\\}",
                    steps: "\\bbox[#fde047, 3px]{\\underline{\\underline{K = \\{[2;\\, 1;\\, 3]\\}}}}"
                },
                {
                    id: 4,
                    type: "equation",
                    statement: "\\begin{cases} x + 2y - z = 5 \\\\ 3x - y + 2z = 4 \\\\ 5x + 3y = 12 \\end{cases}",
                    answer: "K = \\emptyset",
                    steps: "\\bbox[#fde047, 3px]{\\underline{\\underline{K = \\emptyset}}}"
                },
                {
                    id: 5,
                    type: "equation",
                    statement: "\\begin{cases} x - 2y + z = 4 \\\\ 2x - 3y + 3z = 9 \\\\ 3x - 5y + 4z = 13 \\end{cases}",
                    answer: "K = \\{[6 - 3t;\\, 1 - t;\\, t];\\; t \\in \\mathbb{R}\\}",
                    steps: "\\bbox[#fde047, 3px]{\\underline{\\underline{K = \\{[6 - 3t;\\, 1 - t;\\, t];\\; t \\in \\mathbb{R}\\}}}}"
                },
                {
                    id: 6,
                    type: "equation",
                    statement: "\\begin{cases} x + y - 2z = 1 \\\\ 2x - y + 5z = 8 \\\\ 3x + 3z = 9 \\end{cases}",
                    answer: "K = \\{[3 - t;\\, -2 + 3t;\\, t];\\; t \\in \\mathbb{R}\\}",
                    steps: "\\bbox[#fde047, 3px]{\\underline{\\underline{K = \\{[3 - t;\\, -2 + 3t;\\, t];\\; t \\in \\mathbb{R}\\}}}}"
                },
                {
                    id: 7,
                    type: "equation",
                    statement: "\\begin{cases} x - 2y + 3z = 5 \\\\ 2x - 4y + 6z = 10 \\\\ -3x + 6y - 9z = -15 \\end{cases}",
                    answer: "K = \\{[5 + 2s - 3t;\\, s;\\, t];\\; s, t \\in \\mathbb{R}\\}",
                    steps: "\\bbox[#fde047, 3px]{\\underline{\\underline{K = \\{[5 + 2s - 3t;\\, s;\\, t];\\; s, t \\in \\mathbb{R}\\}}}}"
                }
            ]
        }
    ]
});
