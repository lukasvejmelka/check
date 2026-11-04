window.registerDataset({
    meta: {
        id: "DORI",
        name: "Rovnice a nerovnice 2",
        description: "DORI advanced gigasada"
    },
    chapters: [
        {
            title: "I. Zpracovávání závorek",
            color: "text-indigo-400",
            problems: [
                { id: 1, type: "equation", statement: "3(x - 4) = 15", answer: "x = 9", steps: "" },
                { id: 2, type: "equation", statement: "5 - 2(3x - 1) = 4x + 17", answer: "x = -1", steps: "" },
                { id: 3, type: "equation", statement: "3(5-2x) + 5x = 5 - 3(x-1)", answer: "x = -\\frac{7}{2}", steps: "" },
                { id: 4, type: "equation", statement: "4(2x - 3) = 2(4x - 5)", answer: "x \\in \\emptyset", steps: "" },
                { id: 5, type: "equation", statement: "2(3x - 4) + 8 = 6x", answer: "x \\in \\mathbb{R}", steps: "" },
                { id: 6, type: "equation", statement: "7 - [3 - (5 - x)] = 11 - 5x", answer: "x = \\frac{1}{2}", steps: "" },
                { id: 7, type: "equation", statement: "9 - 2\\[4 - 3(7 - 2x)\\] = 2(11 + x)", answer: "x = \\frac{3}{2}", steps: "" },
                { id: 8, type: "equation", statement: "5(2x - 7) - 9 = 4 - 2(3 - 5x)", answer: "x \\in \\emptyset", steps: "" }
            ]
        },
        {
            title: "II. S necelými čísly",
            color: "text-blue-400",
            problems: [
                { id: 9, type: "equation", statement: "0{,}2x + 1{,}5 = 0{,}7x - 1", answer: "x = 5", steps: "" },
                { id: 10, type: "equation", statement: "0{,}3(2 + 3t) - 0{,}5(2t - 3) = 0", answer: "t = 21", steps: "" },
                { id: 11, type: "equation", statement: "3{,}1(2 - 3s) + 5{,}8s = -1{,}3 - 2(s - 1{,}5)", answer: "s = 3", steps: "" },
                { id: 12, type: "equation", statement: "0{,}4(x - 3) = 0{,}2(2x - 6)", answer: "x \\in \\mathbb{R}", steps: "" },
                { id: 13, type: "equation", statement: "1{,}5x - 0{,}5 = 2x + 0{,}3", answer: "x = -\\frac{8}{5}", steps: "" },
                { id: 14, type: "equation", statement: "0{,}05x + 0{,}2 = 0{,}15x", answer: "x = 2", steps: "" },
                { id: 15, type: "equation", statement: "0{,}2(x + 5) - 0{,}3(x - 2) = 0", answer: "x = 16", steps: "" },
                { id: 16, type: "equation", statement: "0{,}5x - 3 = 0{,}5(x - 6)", answer: "x \\in \\mathbb{R}", steps: "" }
            ]
        },
        {
            title: "III. Se zlomky",
            color: "text-emerald-400",
            problems: [
                { id: 17, type: "equation", statement: "\\frac{x+3}{4} - \\frac{x-5}{3} = 2", answer: "x = 5", steps: "" },
                { id: 18, type: "equation", statement: "\\frac{2}{3}(6-x) + 1 - x = 0", answer: "x = 3", steps: "" },
                { id: 19, type: "equation", statement: "\\frac{7}{10}r - \\frac{1}{4}r = \\frac{1}{3}r + \\frac{7}{2}", answer: "r = 30", steps: "" },
                { id: 20, type: "equation", statement: "\\frac{3}{4}s - \\frac{5}{6}s = \\frac{3}{8}s + \\frac{11}{2}", answer: "s = -12", steps: "" },
                { id: 21, type: "equation", statement: "\\frac{5-x}{3} - \\frac{6-4x}{5} = 0", answer: "x = -1", steps: "" },
                { id: 22, type: "equation", statement: "\\frac{x-3}{4} - \\frac{x-7}{5} = \\frac{x+5}{20}", answer: "x \\in \\emptyset", steps: "" },
                { id: 23, type: "equation", statement: "9t - \\frac{3}{4}(5t-1) = 5t + \\frac{5}{8}", answer: "t = -\\frac{1}{2}", steps: "" },
                { id: 24, type: "equation", statement: "-5t - \\frac{2}{5}(3-8t) = 1 - \\frac{1}{2}(3t-1)", answer: "t = -9", steps: "" }
            ]
        },
        {
            title: "IV. Drobet komplikovanější",
            color: "text-amber-400",
            problems: [
                { id: 25, type: "equation", statement: "\\frac{2}{5}v - \\frac{4}{3}v + \\frac{1}{2}v = \\frac{1}{3}\\left(\\frac{v}{5}-1\\right)", answer: "v = \\frac{2}{3}", steps: "" },
                { id: 26, type: "equation", statement: "\\frac{2x - 1}{3} - \\frac{5x + 2}{6} = \\frac{x - 4}{2}", answer: "x = 2", steps: "" },
                { id: 27, type: "equation", statement: "\\frac{3x + 2}{4} - \\frac{x - 1}{2} = 1", answer: "x = 0", steps: "" },
                { id: 28, type: "equation", statement: "\\frac{x+1}{2} + \\frac{x+2}{3} + \\frac{x+3}{6} = x + 2", answer: "x \\in \\emptyset", steps: "" },
                { id: 29, type: "equation", statement: "\\frac{4}{5}(7-3y) - 7 + y = 0", answer: "y = -1", steps: "" },
                { id: 30, type: "equation", statement: "\\frac{2x-3}{5} - \\frac{x+2}{2} = \\frac{3x-1}{10}", answer: "x = -\\frac{15}{4}", steps: "" },
                { id: 31, type: "equation", statement: "\\frac{x+2}{3} - \\frac{2x-1}{4} = \\frac{11-2x}{12}", answer: "x \\in \\mathbb{R}", steps: "" },
                { id: 32, type: "equation", statement: "\\frac{3}{2}(x - 4) - \\frac{2}{3}(2x + 1) = \\frac{1}{6}", answer: "x = 41", steps: "" }
            ]
        },
        {
            title: "V. S odmocninami",
            color: "text-purple-400",
            problems: [
                { id: 33, type: "equation", statement: "\\sqrt{2}x - 3 = 5", answer: "x = 4\\sqrt{2}", steps: "" },
                { id: 34, type: "equation", statement: "\\sqrt{3}x + 2 = x + 6", answer: "x = 2 + 2\\sqrt{3}", steps: "" },
                { id: 35, type: "equation", statement: "x\\sqrt{5} - \\sqrt{5} = 2x", answer: "x = 5 + 2\\sqrt{5}", steps: "" },
                { id: 36, type: "equation", statement: "\\sqrt{2}(x - 1) = 2x", answer: "x = 1 - \\sqrt{2}", steps: "" },
                { id: 37, type: "equation", statement: "x\\sqrt{3} - 3 = x - \\sqrt{3}", answer: "x = \\sqrt{3}", steps: "" },
                { id: 38, type: "equation", statement: "\\sqrt{7}x - 14 = 0", answer: "x = 2\\sqrt{7}", steps: "" },
                { id: 39, type: "equation", statement: "2x\\sqrt{3} - \\sqrt{12} = 0", answer: "x = 1", steps: "" },
                { id: 40, type: "equation", statement: "\\sqrt{2}(x + \\sqrt{2}) = x + 4", answer: "x = 2\\sqrt{2} + 2", steps: "" }
            ]
        },
        {
            title: "VI. Speciální případy",
            color: "text-rose-400",
            problems: [
                { id: 41, type: "equation", statement: "4(x + 1) - 2(2x + 2) = 0", answer: "x \\in \\mathbb{R}", steps: "" },
                { id: 42, type: "equation", statement: "3(2x - 1) - 6x = 5", answer: "x \\in \\emptyset", steps: "" },
                { id: 43, type: "equation", statement: "0 \\cdot x = 0", answer: "x \\in \\mathbb{R}", steps: "" },
                { id: 44, type: "equation", statement: "0 \\cdot x = -7", answer: "x \\in \\emptyset", steps: "" },
                { id: 45, type: "equation", statement: "\\frac{x-1}{2} - \\frac{2x-2}{4} = 0", answer: "x \\in \\mathbb{R}", steps: "" },
                { id: 46, type: "equation", statement: "\\frac{x+5}{3} = \\frac{x}{3} + 2", answer: "x \\in \\emptyset", steps: "" },
                { id: 47, type: "equation", statement: "5x - 3(x - 2) = 2(x + 3)", answer: "x \\in \\mathbb{R}", steps: "" },
                { id: 48, type: "equation", statement: "\\frac{3x - 5}{2} - \\frac{6x + 1}{4} = 0", answer: "x \\in \\emptyset", steps: "" }
            ]
        }
    ]
});