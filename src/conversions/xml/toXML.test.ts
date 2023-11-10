import { describe, expect, test } from '@jest/globals';
import {
    ActionsModel,
    BoundingBoxModel,
    ObjectModel,
    PartModel,
    PascalVocModel,
    SizeModel,
    SourceModel
} from "../../models";
import { Difficult, Segmented, Truncated } from "../../enumerations";
import { toXML } from "./toXML";

describe("Running Tests for Pascal VOC to XML", () => {
    test("should convert to xml", () => {
        const pascalVocModel = new PascalVocModel(
            'Image Folder',
            'Image.jpg',
            '/annotations/Image.jpg',
            new SourceModel(),
            new SizeModel(100, 100, 3),
            Segmented.Linear,
            [
                new ObjectModel(
                    'person',
                    'Unspecified',
                    Truncated.FullyVisible,
                    Difficult.Easy,
                    new BoundingBoxModel(1, 1, 99, 99),
                    [
                        new PartModel(
                            'hand',
                            new BoundingBoxModel(25, 25, 50, 50)
                        ),
                        new PartModel(
                            'hand',
                            new BoundingBoxModel(50, 25, 99, 99)
                        )
                    ],
                    new ActionsModel(new Map<string, number>([
                        ['other', 1],
                        ['jumping', 0],
                        ['phoning', 1],
                        ['playinginstrument', 0],
                        ['reading', 1],
                        ['ridingbike', 0],
                        ['ridinghorse', 1],
                        ['running', 0],
                        ['takingphoto', 1],
                        ['usingcomputer', 0],
                        ['walking', 0],
                    ])),
                ),
                new ObjectModel(
                    'person',
                    'Unspecified',
                    Truncated.FullyVisible,
                    Difficult.Easy,
                    new BoundingBoxModel(1, 1, 99, 99),
                    [
                        new PartModel(
                            'hand',
                            new BoundingBoxModel(25, 25, 50, 50)
                        ),
                        new PartModel(
                            'hand',
                            new BoundingBoxModel(50, 25, 99, 99)
                        )
                    ],
                    new ActionsModel(new Map<string, number>([
                        ['other', 1],
                        ['jumping', 0],
                        ['phoning', 1],
                        ['playinginstrument', 0],
                        ['reading', 1],
                        ['ridingbike', 0],
                        ['ridinghorse', 1],
                        ['running', 0],
                        ['takingphoto', 1],
                        ['usingcomputer', 0],
                        ['walking', 0],
                    ])),
                )
            ]
        )
        const xml = toXML.pascalVOCToXML(pascalVocModel)
        console.log(xml)
        expect(xml).not.toBeNull()
    });
});