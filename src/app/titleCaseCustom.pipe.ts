import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
})
export class TitleCasePipeCustom implements PipeTransform {

    readonly exceptionsWords = ['The', 'Of'];

    transform(value:String, args?:any){
        if(!value) return null;
        let parts = value.split(' ');
        for(let i=0; i<parts.length; i++){
            
            parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1).toLowerCase();

            if(i != 0 && this.isAnExceptionsWord(parts[i]) ){
                parts[i] = parts[i].toLowerCase();
            }
        }
        return parts.join(' ');
    }

    private isAnExceptionsWord(word:String):boolean{
        for( let item of this.exceptionsWords){
            if(word === item) {
                return true;
            }
        }
        return false;
    }
}