/**
 * Helper 1: https://javascript.info/regexp-lookahead-lookbehind
 * Helper 2: https://www.rexegg.com/regex-lookarounds.php
 *
 */

/*
// HELPERS

You've grasped the concept.
Concatenated Lookahead at the Beginning
When multiple lookahead assertions are concatenated at the beginning of a pattern, they behave as:
AND operators: All conditions must be true.
Order-independent: The order of the lookahead assertions doesn't affect the matching.
The lookahead assertions are evaluated before the .* matches any characters.
How it Works
The regex engine checks each lookahead assertion.
If any assertion fails, the overall match fails.
If all assertions pass, the .* matches any remaining characters.

Example
^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$
Checks:
(?=.*[a-z]): at least one lowercase letter
(?=.*[A-Z]): at least one uppercase letter
(?=.*[0-9]): at least one digit

Order doesn't matter:
^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).*$
is equivalent.

Best Practices
Keep lookahead assertions concise.
Use them for simple checks.
Avoid complex patterns within lookaheads.
*/

import validated from "../index";

describe("Regex Password Validation", () => {
  it("Should return true if the password is valid and false if not", () => {
    const password = "jzsff9Zsdfsdfsdf44";
    const expectedResult = true;

    expect(validated(password).toString()).toBe(expectedResult.toString());
  });
});
