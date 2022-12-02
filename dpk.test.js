const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns partitionKey if defined and value type is string", () => {
    const event = {
      partitionKey: "Candidate"
    }
    const candidate = deterministicPartitionKey(event);
    expect(candidate).toBe("Candidate");
  });

  it("Returns partitionKey if defined and value type is not string", () => {
    const event = {
      partitionKey: {
        value: "Value"
      }
    }
    const candidate = deterministicPartitionKey(event);
    expect(candidate).toBe(JSON.stringify(event.partitionKey));
  });

  it("Returns string of cryptic hash if not defined", () => {
    const event = {
      value: "Value"
    }
    const candidate = deterministicPartitionKey(event);
    expect(typeof candidate).toBe("string");
  });

  it("Returns string of cryptic hash if candidate length is greater than MAX_PARTITION_KEY_LENGTH", () => {
    const event = {
      partitionKey: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    const candidate = deterministicPartitionKey(event);
    expect(candidate).not.toBe(event.partitionKey);
    expect(typeof candidate).toBe("string");
  });
});
