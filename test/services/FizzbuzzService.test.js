const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Preuba del servicio de Fizzbuzz para los explorers", () => {
    test("1. score = 1", () => {

        const explorer1 = {name: "Explorer1", score: 1};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer1);

        expect(explorer.score).toBe(1);
    });
    test("2. score = 3", () => {

        const explorer3 = {name: "Explorer3", score: 3};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer3);

        expect(explorer.trick).toBe("FIZZ");
    });
    test("3. score = 5", () => {

        const explorer5 = {name: "Explorer5", score: 5};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer5);

        expect(explorer.trick).toBe("BUZZ");
    });
    test("4. score = 15", () => {

        const explorer15 = {name: "Explorer15", score: 15};
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer15);

        expect(explorer.trick).toBe("FIZZBUZZ");
    });
    test("Nuevo requerimiento Fizzbuzz", () => {

        const explorer1 =  {
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 5,
            mission: "node"
        };

        const explorer = FizzbuzzService.applyValidationInNumber(explorer1.score);
        expect(explorer).toBe("BUZZ");
    });
});