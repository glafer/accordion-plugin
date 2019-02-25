export class Accordion {
    constructor(elem, sections) {
        this.elem = elem;
        this.sections = sections;
    }

    init() {
        let dl = document.createElement('dl');
        dl.classList.add('accordion');
        this.dl = this.elem.appendChild(dl);
        this.renderList();
        this.loadEvents();
    }

    loadEvents() {
        this.elem.addEventListener('click', function (event) {
            if (event.target.tagName === 'DT') {
                event.target.classList.toggle('open');
            }
        }, false);
    }

    getDtElement(title) {
        let dt = document.createElement('dt');
        dt.innerText = title;
        return dt;
    }

    getDdElement(content) {
        let dd = document.createElement('dd');
        dd.innerText = content;
        return dd;
    }

    appendSectionToDt(dtElement, ddElement) {
        this.dl.appendChild(dtElement);
        this.dl.appendChild(ddElement);
    }

    renderList() {
        let sections = this.sections.map(element => {
            return {
                dt: this.getDtElement(element.title),
                dd: this.getDdElement(element.content)
            }
        })
        for (let section of sections) {
            this.appendSectionToDt(section.dt, section.dd);

        }
    }

    addSection(section) {
        this.appendSectionToDt(this.getDtElement(section.title), this.getDdElement(section.content));
    }
}