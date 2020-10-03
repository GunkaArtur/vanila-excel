import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";
import { $ } from "../../core/dom";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      listeners: ["mousedown"]
    });
  }

  toHTML() {
    return createTable(20);
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      console.log(event.target);
      const $resizer = $(event.target);
      // const $parent = $resizer.$el.parentNode; //bad!
      // const $parent = $resizer.$el.closest(`.column`); // better but still bad
      const $parent = $resizer.closest(`[data-type="resizable"]`);
      const coords = $parent.getCoords();

      document.onmousemove = e => {
        const delta = e.pageX - coords.right;
        const value = coords.width + delta;
        $parent.$el.style.width = value + "px";
      };

      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
}
