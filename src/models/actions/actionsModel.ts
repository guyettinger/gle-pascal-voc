/**
 * VOC Object action occurrences
 * @property {[key: string]: number} actionOccurrences - action occurrences
 */
export class ActionsModel {

    constructor(public actionOccurrences: Map<string, number> = new Map<string, number>()) {
    }
}