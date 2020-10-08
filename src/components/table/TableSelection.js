export class TableSelection {
  static classname = "selected";

  constructor() {
    this.group = [];
  }

  // $el instanceof DOM === true
  select($el) {
    this.clear();
    this.group.push($el);
    $el.addClass(TableSelection.classname);
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelection.classname));
    this.group = [];
  }

  selectGroup() {}
}
