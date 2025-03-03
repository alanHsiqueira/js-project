export default class Tooltip {
  constructor(toolTips) {
    this.toolTips = document.querySelectorAll(toolTips);

    //bind do objeto da classe aos callbacks
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  //cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver(event) {
    //cria a tooltip box e coloca em uma propriedade
    this.criarToolTipBox(event.currentTarget);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }
  // remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.element.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.element.removeEventListener("mousemove", this.onMouseMove);
  }
  // move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // criar tooltip box e colocar no body
  criarToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    this.tooltipBox = toolTipBox;
  }
  // adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.toolTips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init(){
    if  (this.toolTips.length){
      this.addTooltipsEvent();
    }
    return this;
  }
}
