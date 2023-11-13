import { create } from 'xmlbuilder2';
import { ObjectModel, PartModel, PascalVocModel } from "../../models";

export class toXML {
    static pascalVOCToXML(pascalVOCModel: PascalVocModel): string {
        const root = create()
        const annotation = root.ele('annotation')
        annotation.ele('folder').txt(pascalVOCModel.folder)
        annotation.ele('filename').txt(pascalVOCModel.filename)
        const size = annotation.ele('size')
        size.ele(pascalVOCModel.size)
        annotation.ele('segmented').txt(pascalVOCModel.segmented.toString())

        pascalVOCModel.objects.forEach((objectModel: ObjectModel) => {
            const object = annotation.ele('object')
            object.ele('name').txt(objectModel.name)
            object.ele('pose').txt(objectModel.pose)
            object.ele('truncated').txt(objectModel.truncated.toString())
            object.ele('difficult').txt(objectModel.difficult.toString())
            const bndbox = object.ele('bndbox')
            bndbox.ele(objectModel.bndbox)
            objectModel.parts.forEach((partModel: PartModel) => {
                const part = object.ele('part')
                part.ele(partModel)
            })
            const actionOccurrences = objectModel.actions.actionOccurrences
            if (actionOccurrences.size) {
                const actions = object.ele('actions')
                actionOccurrences.forEach((value: number, key: string) => {
                    actions.ele(key).txt(value.toString())
                })
            }
        })

        const xml = annotation.end({
            prettyPrint: true,
            headless: true
        })
        return xml
    }
}