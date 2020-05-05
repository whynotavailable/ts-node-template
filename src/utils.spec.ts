import {Doubler} from "./utils";

describe("utils.spec tests", () => {
   it("should double correctly", () => {
      expect(Doubler(5)).toBe(10);
   })
});
