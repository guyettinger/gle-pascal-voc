import { SourceModel } from "../source";
import { SizeModel } from "../size";
import { ObjectModel } from "../object";
import { Segmented } from "../../enumerations";

/**
 * Pascal VOC Image Annotation
 * @property string folder - The name of the parent folder that the dataset is present in.
 * @property string filename - The image filename where the data is annotated on.
 * @property string path - The absolute path where the image file is present.
 * @property SourceModel source - Specifies the original location of the file in a database.
 * @property SizeModel size - Specifies the width, height, depth of an image.
 * @property Segmented segmented - This field signifies if the images contain annotations that are non-linear (irregular) in shape - commonly referred to as polygons.
 */
export class PascalVocModel {
    constructor(
        public folder: string,
        public filename: string,
        public path: string,
        public source: SourceModel,
        public size: SizeModel,
        public segmented: Segmented = Segmented.Linear,
        public objects:ObjectModel[] = []
    ) {
    }
}