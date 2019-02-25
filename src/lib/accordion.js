export class Accordion {
    constructor(elem, sections) {
        this.elem = elem;
        this.sections = sections;
    }

    init() {
        let dl = document.createElement('dl');
        dl.classList.add('accordion');
        this.dl = this.elem.appendChild(dl);
        this._renderList();
        this._loadEvents();
    }

    _loadEvents() {
        this.elem.addEventListener('click', function (event) {
            if (event.target.tagName === 'DT') {
                event.target.classList.toggle('is-open');
            }
        }, false);
    }

    _getDtElement(title) {
        let dt = document.createElement('dt');
        dt.innerText = title;
        return dt;
    }

    _getDdElement(content) {
        let dd = document.createElement('dd');
        dd.innerText = content;
        return dd;
    }

    _appendSectionToDt(dtElement, ddElement) {
        this.dl.appendChild(dtElement);
        this.dl.appendChild(ddElement);
    }

    _renderList() {
        let sections = this.sections.map(element => {
            return {
                dt: this._getDtElement(element.title),
                dd: this._getDdElement(element.content)
            }
        })
        for (let section of sections) {
            this._appendSectionToDt(section.dt, section.dd);

        }
    }

    addSection(section) {
        this._appendSectionToDt(this._getDtElement(section.title), this._getDdElement(section.content));
    }
}
