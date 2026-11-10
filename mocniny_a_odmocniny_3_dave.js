window.registerDataset({
    meta: {
        id: "DAVE",
        name: "Mocniny a odmocniny 3",
        description: "DAVE Procvičovací labužnická sada"
    },
    chapters: [
        {
            title: "I. Ve jmenovateli pouze jednočlen s druhou odmocninou",
            color: "text-indigo-400",
            problems: [
                { id: 1, type: "expression", statement: "\\frac{1}{\\sqrt{2}}", answer: "\\frac{\\sqrt{2}}{2}", steps: "\\frac{1}{\\sqrt{2}} = \\frac{1 \\cdot \\sqrt{2}}{\\sqrt{2} \\cdot \\sqrt{2}} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\frac{\\sqrt{2}}{2}}}}" },
                { id: 2, type: "expression", statement: "\\frac{2}{\\sqrt{3}}", answer: "\\frac{2\\sqrt{3}}{3}", steps: "\\frac{2}{\\sqrt{3}} = \\frac{2 \\cdot \\sqrt{3}}{\\sqrt{3} \\cdot \\sqrt{3}} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\frac{2\\sqrt{3}}{3}}}}" },
                { id: 3, type: "expression", statement: "\\frac{10x}{\\sqrt{5}}", answer: "2x\\sqrt{5}", steps: "\\frac{10x}{\\sqrt{5}} = \\frac{10x \\cdot \\sqrt{5}}{5} = \\bbox[#fde047, 3px]{\\underline{\\underline{2x\\sqrt{5}}}}" },
                { id: 4, type: "expression", statement: "\\frac{7}{\\sqrt{7}}", answer: "\\sqrt{7}", steps: "\\frac{7}{\\sqrt{7}} = \\frac{7\\sqrt{7}}{7} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\sqrt{7}}}}" },
                { id: 5, type: "expression", statement: "\\frac{2}{\\sqrt{x}}", answer: "\\frac{2\\sqrt{x}}{x}", steps: "\\frac{2}{\\sqrt{x}} = \\frac{2 \\cdot \\sqrt{x}}{\\sqrt{x} \\cdot \\sqrt{x}} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\frac{2\\sqrt{x}}{x}}}}" },
                { id: 6, type: "expression", statement: "\\frac{5}{\\sqrt{y}}", answer: "\\frac{5\\sqrt{y}}{y}", steps: "\\frac{5}{\\sqrt{y}} = \\frac{5 \\cdot \\sqrt{y}}{\\sqrt{y} \\cdot \\sqrt{y}} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\frac{5\\sqrt{y}}{y}}}}" },
                { id: 7, type: "expression", statement: "\\frac{1}{\\sqrt{a}}", answer: "\\frac{\\sqrt{a}}{a}", steps: "\\frac{1}{\\sqrt{a}} = \\frac{1 \\cdot \\sqrt{a}}{\\sqrt{a} \\cdot \\sqrt{a}} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\frac{\\sqrt{a}}{a}}}}" },
                { id: 8, type: "expression", statement: "\\frac{x}{\\sqrt{x}}", answer: "\\sqrt{x}", steps: "\\frac{x}{\\sqrt{x}} = \\frac{x\\sqrt{x}}{x} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\sqrt{x}}}}" },
                { id: 9, type: "expression", statement: "\\frac{2y}{\\sqrt{y}}", answer: "2\\sqrt{y}", steps: "\\frac{2y}{\\sqrt{y}} = \\frac{2y\\sqrt{y}}{y} = \\bbox[#fde047, 3px]{\\underline{\\underline{2\\sqrt{y}}}}" },
                { id: 10, type: "expression", statement: "\\frac{5a}{\\sqrt{a}}", answer: "5\\sqrt{a}", steps: "\\frac{5a}{\\sqrt{a}} = \\frac{5a\\sqrt{a}}{a} = \\bbox[#fde047, 3px]{\\underline{\\underline{5\\sqrt{a}}}}" },
                { id: 11, type: "expression", statement: "\\frac{4+x}{3\\sqrt{x}}", answer: "\\frac{(4+x)\\sqrt{x}}{3x}", steps: "\\frac{4+x}{3\\sqrt{x}} = \\frac{(4+x)\\sqrt{x}}{3\\sqrt{x}\\cdot\\sqrt{x}} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\frac{(4+x)\\sqrt{x}}{3x}}}}" },
                { id: 12, type: "expression", statement: "\\frac{\\sqrt{3}}{\\sqrt{y}}", answer: "\\frac{\\sqrt{3y}}{y}", steps: "\\frac{\\sqrt{3}}{\\sqrt{y}} = \\frac{\\sqrt{3}\\cdot\\sqrt{y}}{\\sqrt{y}\\cdot\\sqrt{y}} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\frac{\\sqrt{3y}}{y}}}}" },
                { id: 13, type: "expression", statement: "\\frac{x^2}{\\sqrt{x}}", answer: "x\\sqrt{x}", steps: "\\frac{x^2}{\\sqrt{x}} = \\frac{x^2\\sqrt{x}}{x} = \\bbox[#fde047, 3px]{\\underline{\\underline{x\\sqrt{x}}}}" },
                { id: 14, type: "expression", statement: "\\frac{3y^3}{\\sqrt{y}}", answer: "3y^2\\sqrt{y}", steps: "\\frac{3y^3}{\\sqrt{y}} = \\frac{3y^3\\sqrt{y}}{y} = \\bbox[#fde047, 3px]{\\underline{\\underline{3y^2\\sqrt{y}}}}" },
                { id: 15, type: "expression", statement: "\\frac{a^2b}{\\sqrt{a}}", answer: "ab\\sqrt{a}", steps: "\\frac{a^2b}{\\sqrt{a}} = \\frac{a^2b\\sqrt{a}}{a} = \\bbox[#fde047, 3px]{\\underline{\\underline{ab\\sqrt{a}}}}" },
                { id: 16, type: "expression", statement: "\\frac{2ab}{\\sqrt{b}}", answer: "2a\\sqrt{b}", steps: "\\frac{2ab}{\\sqrt{b}} = \\frac{2ab\\sqrt{b}}{b} = \\bbox[#fde047, 3px]{\\underline{\\underline{2a\\sqrt{b}}}}" },
                { id: 17, type: "expression", statement: "\\frac{6x^2y}{3\\sqrt{x}}", answer: "2xy\\sqrt{x}", steps: "\\frac{6x^2y}{3\\sqrt{x}} = \\frac{2x^2y}{\\sqrt{x}} = \\frac{2x^2y\\sqrt{x}}{x} = \\bbox[#fde047, 3px]{\\underline{\\underline{2xy\\sqrt{x}}}}" },
                { id: 18, type: "expression", statement: "\\frac{5abc}{\\sqrt{c}}", answer: "5ab\\sqrt{c}", steps: "\\frac{5abc}{\\sqrt{c}} = \\frac{5abc\\sqrt{c}}{c} = \\bbox[#fde047, 3px]{\\underline{\\underline{5ab\\sqrt{c}}}}" },
                { id: 19, type: "expression", statement: "\\frac{1}{\\sqrt{xy}}", answer: "\\frac{\\sqrt{xy}}{xy}", steps: "\\frac{1}{\\sqrt{xy}} = \\frac{1\\cdot\\sqrt{xy}}{\\sqrt{xy}\\cdot\\sqrt{xy}} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\frac{\\sqrt{xy}}{xy}}}}" },
                { id: 20, type: "expression", statement: "\\frac{ab}{\\sqrt{ab}}", answer: "\\sqrt{ab}", steps: "\\frac{ab}{\\sqrt{ab}} = \\frac{ab\\sqrt{ab}}{ab} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\sqrt{ab}}}}" },
                { id: 21, type: "expression", statement: "\\frac{x^2y}{\\sqrt{xy^3}}", answer: "\\frac{x\\sqrt{xy}}{y}", steps: "\\frac{x^2y}{\\sqrt{xy^3}} = \\frac{x^2y}{y\\sqrt{xy}} = \\frac{x^2}{\\sqrt{xy}} = \\frac{x^2\\sqrt{xy}}{xy} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\frac{x\\sqrt{xy}}{y}}}}" },
                { id: 22, type: "expression", statement: "\\frac{x}{\\sqrt{x+1}}", answer: "\\frac{x\\sqrt{x+1}}{x+1}", steps: "\\frac{x}{\\sqrt{x+1}} = \\frac{x\\cdot\\sqrt{x+1}}{\\sqrt{x+1}\\cdot\\sqrt{x+1}} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\frac{x\\sqrt{x+1}}{x+1}}}}" },
                { id: 23, type: "expression", statement: "\\frac{x-2}{\\sqrt{x-2}}", answer: "\\sqrt{x-2}", steps: "\\frac{x-2}{\\sqrt{x-2}} = \\frac{(x-2)\\sqrt{x-2}}{x-2} = \\bbox[#fde047, 3px]{\\underline{\\underline{\\sqrt{x-2}}}}" },
                { id: 24, type: "expression", statement: "\\frac{a^2+2ab+b^2}{\\sqrt{a+b}}", answer: "(a+b)\\sqrt{a+b}", steps: "\\frac{(a+b)^2}{\\sqrt{a+b}} = \\frac{(a+b)^2\\sqrt{a+b}}{a+b} = \\bbox[#fde047, 3px]{\\underline{\\underline{(a+b)\\sqrt{a+b}}}}" }
            ]
        },
        // ... (stejným způsobem by se to aplikovalo pro zbývající kapitoly v DAVE)
    ]
});
