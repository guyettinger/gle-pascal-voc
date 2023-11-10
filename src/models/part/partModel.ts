import { BoundingBoxModel } from "../boundingBox";

/**
 * Pascal VOC Object
 * @property string name - This field specifies the part name of the annotated label.
 * @property BoundingBoxModel bndbox - These are coordinates that determine the location of the part.
 */
export class PartModel {

    constructor(
        public name: string,
        public bndbox: BoundingBoxModel
    ) {
    }
}