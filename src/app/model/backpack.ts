import { Prize } from "./prize";
import { Country } from "./country";
export class Backpack{
    prizeType?: string; 
    label?: string;
    errorMessage?: string;
    prizes?: Prize[];
    locations?: Country[];
}
    
