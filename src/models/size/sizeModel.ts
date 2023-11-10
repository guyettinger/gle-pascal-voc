/**
 * Specifies the width, height, depth of an image.
 * @property number width - width of the image
 * @property number height - width of the image
 * @property number depth - the RGB color scale of the image i.e. 3
 */
export class SizeModel {
    constructor(public width: number, public height: number, public depth: number = 3) {
    }
}