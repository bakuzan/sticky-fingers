class FocusService {
  private prevSquareNumber: string | undefined;
  private squareNumber: string | undefined;

  public setFocus(num: string | undefined) {
    this.prevSquareNumber = this.squareNumber;
    this.squareNumber = num;
  }

  public getFocus() {
    return this.squareNumber;
  }

  public getPreviousFocus() {
    return this.prevSquareNumber;
  }
}

export default new FocusService();
