// Registrace sady do globálního registru trenažéru
window.registerDataset({
    "meta": {
        "id": "papousek",
        "name": "Odmocniny a mocniny II.",
        "description": "Interaktivní pracovní list (76 příkladů)",
        "version": "2.2"
    },
    "chapters": [
        {
            "chapterId": "I",
            "title": "I. Základní odmocninyX",
            "color": "text-blue-400",
            "problems": [
                { "id": 1, "type": "expression", "statement": "\\sqrt{81}", "answer": "\\underline{\\underline{9}}", "steps": "\\sqrt{81} = \\bbox[#fef08a, 3px]{\\underline{\\underline{9}}}" },
                { "id": 2, "type": "expression", "statement": "\\sqrt{100}", "answer": "\\underline{\\underline{10}}", "steps": "\\sqrt{100} = \\bbox[#fef08a, 3px]{\\underline{\\underline{10}}}" },
                { "id": 3, "type": "expression", "statement": "\\sqrt{144}", "answer": "\\underline{\\underline{12}}", "steps": "\\sqrt{144} = \\bbox[#fef08a, 3px]{\\underline{\\underline{12}}}" }
                          ]
        },
        {
            "chapterId": "II",
            "title": "II. Částečné odmocňování",
            "color": "text-emerald-400",
            "problems": [
                { "id": 25, "type": "expression", "statement": "\\sqrt{0{,}0001}", "answer": "\\underline{\\underline{0{,}01}}", "steps": "\\sqrt{0{,}0001} = \\bbox[#fef08a, 3px]{\\underline{\\underline{0{,}01}}}" },
                { "id": 26, "type": "expression", "statement": "\\sqrt{2500}", "answer": "\\underline{\\underline{50}}", "steps": "\\sqrt{2500} = \\sqrt{25 \\cdot 100} = 5 \\cdot 10 = \\bbox[#fef08a, 3px]{\\underline{\\underline{50}}}" },
                { "id": 27, "type": "expression", "statement": "\\sqrt[3]{1000}", "answer": "\\underline{\\underline{10}}", "steps": "\\sqrt[3]{1000} = \\bbox[#fef08a, 3px]{\\underline{\\underline{10}}}" },
                { "id": 28, "type": "expression", "statement": "\\sqrt[4]{10000}", "answer": "\\underline{\\underline{10}}", "steps": "\\sqrt[4]{10000} = \\bbox[#fef08a, 3px]{\\underline{\\underline{10}}}" },
                { "id": 29, "type": "expression", "statement": "\\sqrt{\\dfrac{1}{16}}", "answer": "\\underline{\\underline{\\dfrac{1}{4}}}", "steps": "\\sqrt{\\frac{1}{16}} = \\bbox[#fef08a, 3px]{\\underline{\\underline{\\frac{1}{4}}}\\mathstrut}" },
                { "id": 30, "type": "expression", "statement": "\\sqrt[3]{\\dfrac{8}{125}}", "answer": "\\underline{\\underline{\\dfrac{2}{5}}}", "steps": "\\sqrt[3]{\\frac{8}{125}} = \\bbox[#fef08a, 3px]{\\underline{\\underline{\\frac{2}{5}}}\\mathstrut}" },
                { "id": 31, "type": "expression", "statement": "\\sqrt{3^4}", "answer": "\\underline{\\underline{9}}", "steps": "\\sqrt{3^4} = 3^{\\frac{4}{2}} = 3^2 = \\bbox[#fef08a, 3px]{\\underline{\\underline{9}}}" },
                { "id": 32, "type": "expression", "statement": "\\sqrt[3]{2^6}", "answer": "\\underline{\\underline{4}}", "steps": "\\sqrt[3]{2^6} = 2^{\\frac{6}{3}} = 2^2 = \\bbox[#fef08a, 3px]{\\underline{\\underline{4}}}" }
                          ]
        },
        {
            "chapterId": "III",
            "title": "III. Operace s odmocninami",
            "color": "text-amber-400",
            "problems": [
                { "id": 65, "type": "expression", "statement": "\\sqrt{3} \\cdot \\sqrt{12}", "answer": "\\underline{\\underline{6}}", "steps": "\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{36} = \\bbox[#fef08a, 3px]{\\underline{\\underline{6}}}" },
                { "id": 66, "type": "expression", "statement": "\\sqrt{2} \\cdot \\sqrt{8}", "answer": "\\underline{\\underline{4}}", "steps": "\\sqrt{2} \\cdot \\sqrt{8} = \\sqrt{16} = \\bbox[#fef08a, 3px]{\\underline{\\underline{4}}}" }
                          ]
        },
        {
            "chapterId": "IV",
            "title": "IV. Kombinace a rac. exponenty",
            "color": "text-purple-400",
            "problems": [
                { "id": 81, "type": "expression", "statement": "x^{\\frac{1}{2}} \\cdot x^{\\frac{1}{3}}", "answer": "\\underline{\\underline{x^{\\frac{5}{6}}}}", "steps": "x^{\\frac{1}{2}} \\cdot x^{\\frac{1}{3}} = x^{\\frac{1}{2}+\\frac{1}{3}} = \\bbox[#fef08a, 3px]{\\underline{\\underline{x^{\\frac{5}{6}}}}}" },
                { "id": 82, "type": "expression", "statement": "\\sqrt{x} \\cdot \\sqrt[3]{x^2}", "answer": "\\underline{\\underline{x^{\\frac{7}{6}}}}", "steps": "x^{\\frac{1}{2}} \\cdot x^{\\frac{2}{3}} = x^{\\frac{3+4}{6}} = \\bbox[#fef08a, 3px]{\\underline{\\underline{x^{\\frac{7}{6}}}}}" },
                { "id": 83, "type": "expression", "statement": "\\dfrac{\\sqrt[3]{a^2}}{\\sqrt{a}}", "answer": "\\underline{\\underline{a^{-\\frac{1}{6}}}}", "steps": "\\frac{a^{\\frac{2}{3}}}{a^{\\frac{1}{2}}} = a^{\\frac{2}{3}-\\frac{1}{2}} = \\bbox[#fef08a, 3px]{\\underline{\\underline{a^{\\frac{1}{6}}}}}" }
                           ]
        }
    ]
});