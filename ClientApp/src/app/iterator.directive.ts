import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChange, IterableDiffer, IterableDiffers, ChangeDetectorRef, CollectionChangeRecord, DefaultIterableDiffer } from "@angular/core";


@Directive({
  selector: "[paForOf]"
})
export class PaIteratorDirective {
  private differ: DefaultIterableDiffer<any>;

  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>, private differs: IterableDiffers, private changeDetector: ChangeDetectorRef) { }

  @Input("paForOf")
  dataSource: any;

  ngOnInit() {
    this.differ = <DefaultIterableDiffer<any>>this.differs.find(this.dataSource).create();
    //this.updateContent();
    //this.container.clear();
    //for (let i = 0; i < this.dataSource.length; i++) {
    //  this.container.createEmbeddedView(this.template, new PaIteratorContext(this.dataSource[i], i, this.dataSource.length));
    //}
  }


  ngDoCheck() {
    //console.log("Wywołanie metody ngDoCheck().");
    //this.updateContent();
    let changes = this.differ.diff(this.dataSource);
    if (changes != null) {
      console.log("Wywołanie metody ngDoCheck(), wykryto zmiany.");
      changes.forEachAddedItem(addition => {
        this.container.createEmbeddedView(this.template, new PaIteratorContext(addition.item, addition.currentIndex, changes.length));
      });
    }
  }

  //updateContent() {
  //  this.container.clear();
  //  for (let i = 0; i < this.dataSource.length; i++) {
  //    this.container.createEmbeddedView(this.template, new PaIteratorContext(this.dataSource[i], i, this.dataSource.length));
  //  }
  //}

}

class PaIteratorContext {
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;

  constructor(public $implicit: any, public index: number, total: number) {
    this.odd = index % 2 == 1;
    this.even = !this.odd;
    this.first = index == 0;
    this.last = index == total - 1;

    //setInterval(() => {
    //  this.odd = !this.odd;
    //  this.even = !this.even;
    //  this.$implicit.price++;
    //}, 2000);
  }
}
