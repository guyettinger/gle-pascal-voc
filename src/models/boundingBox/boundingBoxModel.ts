/**
 * These are coordinates that determine the location of the object.
 * These coordinates are represented as [xmin, ymin, xmax, ymax]
 * where they correspond to (x, y) coordinates of top-left and bottom-right positions of an object.
 * @property number xmin - top-left x position
 * @property number ymin - top-left y position
 * @property number xmax - bottom-right x position
 * @property number ymax - bottom-right y position
 */
export class BoundingBoxModel {
    constructor(
        public xmin: number,
        public ymin: number,
        public xmax: number,
        public ymax: number
    ) {
    }
}