export class TableSelection {
  static classname = "selected";

  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this.clear();
    this.group.push($el);
    $el.focus().addClass(TableSelection.classname);
    this.current = $el;
  }

  selectGroup($group = []) {
    this.clear();
    this.group = $group;
    this.group.forEach($el => $el.addClass(TableSelection.classname));
  }

  clear() {
    this.group.forEach($el => $el.removeClass(TableSelection.classname));
    this.group = [];
  }
}
