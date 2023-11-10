import { BoundingBoxModel } from "../boundingBox";
import { Difficult, Truncated } from "../../enumerations";
import { PartModel } from "../part";
import { ActionsModel } from "../actions";

/**
 * Pascal VOC Object
 * @property string name - This field specifies the name of the annotated label.
 * @property string pose - Specifies the skewness or orientation of the image. By default, it is specified as Unspecified, which means that the image is not skewed.
 * @property Truncated truncated - Tells if an object is fully or partially visible (can be either 0 or 1 respectively).
 * @property Difficult difficult - Tells if an object is difficult to recognize from an image (can be either 0 - easy or 1 - difficult).
 * @property BoundingBoxModel bndbox - These are coordinates that determine the location of the object.
 */
export class ObjectModel {

    constructor(
        public name: string,
        public pose: string,
        public truncated: Truncated,
        public difficult: Difficult,
        public bndbox: BoundingBoxModel,
        public parts: PartModel[] = [],
        public actions: ActionsModel = new ActionsModel()
    ) {
    }
}