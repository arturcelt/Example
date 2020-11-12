import { Directive, Input, Output, EventEmitter, SimpleChange, ContentChildren, QueryList } from "@angular/core";
import { PaCellColor } from "./cellColor.directive";
import { LogService, LOG_SERVICE, SpecialLogService, LogLevel, LOG_LEVEL } from "./log.service";

@Directive({
  selector: "table",
  providers: [{ provide: LogService, useClass: LogService }]
})
export class PaCellColorSwitcher {
  @Input("paCellDarkColor")
  modelProperty: Boolean;

  constructor(logger: LogService) {
    logger.logInfoMessage("log from directive.");
  }

  @ContentChildren(PaCellColor)
  contentChildren: QueryList<PaCellColor>;


  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    this.updateContentChildren(changes["modelProperty"].currentValue)
  }

  ngAfterContentInit() {
    //console.log(this.modelProperty);
    this.contentChildren.changes.subscribe(() => {
      setTimeout(() => this.updateContentChildren(this.modelProperty), 0);
    
    })
  }

  private updateContentChildren(dark: Boolean) {
    console.log("in method updateContentChildren!!!");
    if (this.contentChildren != null && dark != undefined) {
      this.contentChildren.forEach((child, index) => {
        child.setColor(index % 2 ? dark : !dark);
      });
    }
  }


  }


