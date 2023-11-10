/**
 * Specifies the source of the annotation file
 * @property string database - Specifies the original location of the file in a database.
 */
export class SourceModel {

    constructor(public database: string = 'Unknown') {
    }
}