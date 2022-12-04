class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }
  execute() {
    const anySpent = this.inputUTXOs.some((x) => x.spent);
    if (anySpent) {
      throw new Error("Cannot spend already spent UTXOs");
    }

    const inputAmount = this.inputUTXOs.reduce((p, c) => {
      return p + c.amount;
    }, 0);
    const outputAmount = thisd.outputUTXOs.reduce((p, c) => {
      return p + c.amount;
    }, 0);

    if (inputAmount < outputAmount) {
      throw new Error("Not enough funds");
    }
  }
}
