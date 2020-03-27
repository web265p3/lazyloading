export class MenuItem {
   constructor(public Title: string,
               public Url: string,
               public IsExternal: boolean = false,
               public Activated: boolean = true,
               public IconCssClass: string = '') {
   }
}
