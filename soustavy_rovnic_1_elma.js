window.registerDataset({
    meta: {
        id: "ELMA",
        name: "Soustavy rovnic 1",
        description: "ELMA advanced parádosada"
    },
    chapters: [
        {
            title: "I. Soustavy dvou rovnic o dvou neznámých",
            color: "text-indigo-400",
            problems: [
                { id: 1, type: "equation", statement: "\\begin{array}{rcl} 2x+3y &=& -8 \\\\ 3x-2y &=& 27 \\end{array}", answer: "K = \\{[5, -6]\\}", steps: "" },
                { id: 2, type: "equation", statement: "\\begin{array}{rcl} 3u - 2v &=& 1 \\\\ 4u-v &=& -2 \\end{array}", answer: "K = \\{[-1, -2]\\}", steps: "" },
                { id: 3, type: "equation", statement: "\\begin{array}{rcl} -8a+2b &=& 6 \\\\ 12a-3b &=& -9 \\end{array}", answer: "K = \\left\\{\\left[\\frac{t-3}{4}, t\\right]\\right\\}; t \\in \\mathbb{R}", steps: "" },
                { id: 4, type: "equation", statement: "\\begin{array}{rcl} 3c-6d &=& 9 \\\\ -4c+8d &=& 12 \\end{array}", answer: "K = \\emptyset", steps: "" },
                { id: 5, type: "equation", statement: "\\begin{array}{rcl} 7x-3y &=& -1 \\\\ 5x+y &=& 15 \\end{array}", answer: "K = \\{[2, 5]\\}", steps: "" },
                { id: 6, type: "equation", statement: "\\begin{array}{rcl} 3a+2b &=& 15 \\\\ 5a+4b &=& 23 \\end{array}", answer: "K = \\{[7, -3]\\}", steps: "" },
                { id: 7, type: "equation", statement: "\\begin{array}{rcl} 3x+2y &=& 10 \\\\ 2x-5y &=& -63 \\end{array}", answer: "K = \\{[-4, 11]\\}", steps: "" },
                { id: 8, type: "equation", statement: "\\begin{array}{rcl} 5x+y &=& 8 \\\\ 3x+4y &=& 15 \\end{array}", answer: "K = \\{[1, 3]\\}", steps: "" },
                { id: 9, type: "equation", statement: "\\begin{array}{rcl} 7a-6b &=& -19 \\\\ 4a+3b &=& 2 \\end{array}", answer: "K = \\{[-1, 2]\\}", steps: "" },
                { id: 10, type: "equation", statement: "\\begin{array}{rcl} 3u-4v &=& 17 \\\\ 4u+3v &=& 4 \\end{array}", answer: "K = \\left\\{\\left[\\frac{67}{25}, -\\frac{56}{25}\\right]\\right\\}", steps: "" },
                { id: 11, type: "equation", statement: "\\begin{array}{rcl} 2x+y &=& 4 \\\\ x-y &=& 1 \\end{array}", answer: "K = \\left\\{\\left[\\frac{5}{3}, \\frac{2}{3}\\right]\\right\\}", steps: "" },
                { id: 12, type: "equation", statement: "\\begin{array}{rcl} x-3y &=& 7 \\\\ x+2y &=& 2 \\end{array}", answer: "K = \\{[4, -1]\\}", steps: "" },
                { id: 13, type: "equation", statement: "\\begin{array}{rcl} 3a-2b -1 &=& 0 \\\\ 5a &=& 1-2b \\end{array}", answer: "K = \\left\\{\\left[\\frac{1}{4}, -\\frac{1}{8}\\right]\\right\\}", steps: "" },
                { id: 14, type: "equation", statement: "\\begin{array}{rcl} 3x+9y &=& 21 \\\\ -x-3y &=& -7 \\end{array}", answer: "K = \\{[7-3t, t]\\}; t \\in \\mathbb{R}", steps: "" },
                { id: 15, type: "equation", statement: "\\begin{array}{rcl} 0{,}2x + 0{,}1y &=& 1{,}1 \\\\ 0{,}3x - 0{,}1y &=& 0{,}9 \\end{array}", answer: "K = \\{[4, 3]\\}", steps: "" },
                { id: 16, type: "equation", statement: "\\begin{array}{rcl} \\frac{x}{5}+\\frac{5y}{2} &=& -4 \\\\ \\frac{x}{6}+\\frac{y}{3} &=& \\frac{1}{6} \\end{array}", answer: "K = \\{[5, -2]\\}", steps: "" },
                { id: 17, type: "equation", statement: "\\begin{array}{rcl} x+y &=& 5 \\\\ x-y &=& 1 \\end{array}", answer: "K = \\{[3, 2]\\}", steps: "" },
                { id: 18, type: "equation", statement: "\\begin{array}{rcl} 2x+2 &=& x-y \\\\ 3x+2y &=& 0 \\end{array}", answer: "K = \\{[4, -6]\\}", steps: "" },
                { id: 19, type: "equation", statement: "\\begin{array}{rcl} x+3y &=& 11 \\\\ 3(x-1)-5y &=& -68 \\end{array}", answer: "K = \\{[-10, 7]\\}", steps: "" },
                { id: 20, type: "equation", statement: "\\begin{array}{rcl} \\frac{1}{3}x+\\frac{7}{8}y &=& 8 \\\\ 14x-5y &=& 2 \\end{array}", answer: "K = \\{[3, 8]\\}", steps: "" },
                { id: 21, type: "equation", statement: "\\begin{array}{rcl} 2x &=& y \\\\ x+y &=& 0 \\end{array}", answer: "K = \\{[0, 0]\\}", steps: "" },
                { id: 22, type: "equation", statement: "\\begin{array}{rcl} m+2n &=& -2 \\\\ \\frac{m}{n} &=& 3 \\end{array}", answer: "K = \\left\\{\\left[-\\frac{6}{5}, -\\frac{2}{5}\\right]\\right\\}", steps: "" },
                { id: 23, type: "equation", statement: "\\begin{array}{rcl} ab &=& 1 \\\\ a+4b &=& 4 \\end{array}", answer: "K = \\left\\{\\left[2, \\frac{1}{2}\\right]\\right\\}", steps: "" },
                { id: 24, type: "equation", statement: "\\begin{array}{rcl} -u &=& 24 \\\\ -u-v &=& -36 \\end{array}", answer: "K = \\{[-24, 60]\\}", steps: "" },
                { id: 25, type: "equation", statement: "\\begin{array}{rcl} 3(2x-5)+2y &=& -41 \\\\ \\frac{x-3y}{9}-y &=& 5 \\end{array}", answer: "K = \\{[-3, -4]\\}", steps: "" },
                { id: 26, type: "equation", statement: "\\begin{array}{rcl} \\frac{3a+1}{4}-\\frac{4b-1}{7} &=& 1 \\\\ \\frac{a+1}{3}-\\frac{b+2}{4} &=& 1 \\end{array}", answer: "K = \\{[173, 226]\\}", steps: "" },
                { id: 27, type: "equation", statement: "\\begin{array}{rcl} (x-2)(y+5) &=& (x-1)(y+2) \\\\ (y-3)(x+4) &=& (x+7)(y-4) \\end{array}", answer: "K = \\{[5, 7]\\}", steps: "" },
                { id: 28, type: "equation", statement: "\\begin{array}{rcl} 3x+4y &=& 11 \\\\ y &=& 5x \\end{array}", answer: "K = \\left\\{\\left[\\frac{11}{23}, \\frac{55}{23}\\right]\\right\\}", steps: "" },
                { id: 29, type: "equation", statement: "\\begin{array}{rcl} \\frac{x}{5}-2 &=& \\frac{y}{10} \\\\ 5x+45 &=& -7y \\end{array}", answer: "K = \\{[5, -10]\\}", steps: "" },
                { id: 30, type: "equation", statement: "\\begin{array}{rcl} \\frac{2x-y+3}{3}-\\frac{x-2y+3}{4} &=& 4 \\\\ \\frac{3x-4y+3}{4}+\\frac{4x-2y-9}{3} &=& 4 \\end{array}", answer: "K = \\{[7, 5]\\}", steps: "" },
                { id: 31, type: "equation", statement: "\\begin{array}{rcl} 1-2x &=& 14 \\\\ 2y -1 &=& y \\end{array}", answer: "K = \\left\\{\\left[-\\frac{13}{2}, 1\\right]\\right\\}", steps: "" },
                { id: 32, type: "equation", statement: "\\begin{array}{rcl} 5 &=& -x \\\\ y-2 &=& -2+y \\end{array}", answer: "K = \\{[-5, t]\\}; t \\in \\mathbb{R}", steps: "" }
            ]
        },
        {
            title: "II. Soustavy tří rovnic o třech neznámých",
            color: "text-emerald-400",
            problems: [
                { id: 33, type: "equation", statement: "\\begin{array}{rcl} 2x+3y-z &=& 5 \\\\ 3x-2y+4z &=& 10 \\\\ 5x+y+2z &=& 11 \\end{array}", answer: "K = \\{[0, 3, 4]\\}", steps: "" },
                { id: 34, type: "equation", statement: "\\begin{array}{rcl} 4x+y+2z &=& 12 \\\\ 3x-2y+z &=& 2 \\\\ 5x+3y-z &=& 8 \\end{array}", answer: "K = \\{[1, 2, 3]\\}", steps: "" },
                { id: 35, type: "equation", statement: "\\begin{array}{rcl} 3x+2y+z &=& 6 \\\\ 2x-3y+2z &=& 1 \\\\ 4x+y-z &=& 4 \\end{array}", answer: "K = \\{[1, 1, 1]\\}", steps: "" },
                { id: 36, type: "equation", statement: "\\begin{array}{rcl} x+2y+3z &=& 4 \\\\ 2x-y+z &=& 1 \\\\ 3x+y+2z &=& 5 \\end{array}", answer: "K = \\left\\{\\left[\\frac{6}{5}, \\frac{7}{5}, 0\\right]\\right\\}", steps: "" },
                { id: 37, type: "equation", statement: "\\begin{array}{rcl} 2x-y+z &=& 0 \\\\ 3x+2y-z &=& 5 \\\\ x+y+z &=& 2 \\end{array}", answer: "K = \\left\\{\\left[\\frac{8}{11}, \\frac{15}{11}, -\\frac{1}{11}\\right]\\right\\}", steps: "" },
                { id: 38, type: "equation", statement: "\\begin{array}{rcl} x+2y-z &=& 1 \\\\ 2x-y+3z &=& 7 \\\\ 3x+y+z &=& 6 \\end{array}", answer: "K = \\{[1, 1, 2]\\}", steps: "" },
                { id: 39, type: "equation", statement: "\\begin{array}{rcl} x+y+z &=& 6 \\\\ 2x-y+z &=& 3 \\\\ x+2y-z &=& 3 \\end{array}", answer: "K = \\left\\{\\left[\\frac{9}{7}, \\frac{15}{7}, \\frac{18}{7}\\right]\\right\\}", steps: "" },
                { id: 40, type: "equation", statement: "\\begin{array}{rcl} 2x+3y-z &=& 1 \\\\ -x+4y+2z &=& 12 \\\\ 3x-y+z &=& 4 \\end{array}", answer: "K = \\left\\{\\left[\\frac{1}{2}, \\frac{5}{4}, \\frac{15}{4}\\right]\\right\\}", steps: "" },
                { id: 41, type: "equation", statement: "\\begin{array}{rcl} 3x+y+z &=& 9 \\\\ 2x+z &=& 4 \\\\ y-z &=& 1 \\end{array}", answer: "K = \\{[0, 5, 4]\\}", steps: "" },
                { id: 42, type: "equation", statement: "\\begin{array}{rcl} 3x-2z &=& 6 \\\\ y+z &=& 3 \\\\ x+y &=& 5 \\end{array}", answer: "K = \\{[2, 3, 0]\\}", steps: "" },
                { id: 43, type: "equation", statement: "\\begin{array}{rcl} x+y+z &=& 1 \\\\ x+y+z &=& 2 \\\\ x-y+z &=& 0 \\end{array}", answer: "K = \\emptyset", steps: "" },
                { id: 44, type: "equation", statement: "\\begin{array}{rcl} 2x-y+z &=& 3 \\\\ 4x-2y+2z &=& 8 \\\\ x+y-z &=& 1 \\end{array}", answer: "K = \\emptyset", steps: "" },
                { id: 45, type: "equation", statement: "\\begin{array}{rcl} x+y+z &=& 3 \\\\ 2x+2y+2z &=& 6 \\\\ x-y+z &=& 1 \\end{array}", answer: "K = \\{[t, 1, 2-t]\\}; t \\in \\mathbb{R}", steps: "" },
                { id: 46, type: "equation", statement: "\\begin{array}{rcl} x+y+z &=& 0 \\\\ 2x+2y+2z &=& 0 \\\\ 3x+3y+3z &=& 0 \\end{array}", answer: "K = \\{[-s-t, s, t]\\}; s, t \\in \\mathbb{R}", steps: "" },
                { id: 47, type: "equation", statement: "\\begin{array}{rcl} 2a+b &=& 5 \\\\ b-3c &=& -11 \\\\ a+2c &=& 7 \\end{array}", answer: "K = \\{[1, 3, 2]\\}", steps: "" },
                { id: 48, type: "equation", statement: "\\begin{array}{rcl} 4a-c &=& 5 \\\\ 3a+2b &=& 8 \\\\ 5b+2c &=& -1 \\end{array}", answer: "K = \\{[2, 1, -3]\\}", steps: "" }
            ]
        }
    ]
});