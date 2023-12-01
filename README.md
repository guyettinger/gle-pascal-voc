<a href="/">
    <img alt="logo" src="public/images/logo-flipped.png" align="right" width="120" height="120"/>
</a>

# GLE Pascal VOC
A library for working with Pascal Visual Object Classes (VOC) Annotations

[![Version](https://img.shields.io/npm/v/gle-pascal-voc?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/gle-pascal-voc)
[![Downloads](https://img.shields.io/npm/dt/gle-pascal-voc.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/gle-pascal-voc)


## Installation
```shell
npm install gle-pascal-voc
```

## Usage
```typescript
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
```
```xml
<annotation>
  <folder>Image Folder</folder>
  <filename>Image.jpg</filename>
  <size>
    <width>100</width>
    <height>100</height>
    <depth>3</depth>
  </size>
  <segmented>0</segmented>
  <object>
    <name>person</name>
    <pose>Unspecified</pose>
    <truncated>0</truncated>
    <difficult>0</difficult>
    <bndbox>
      <xmin>1</xmin>
      <ymin>1</ymin>
      <xmax>99</xmax>
      <ymax>99</ymax>
    </bndbox>
    <part>
      <name>hand</name>
      <bndbox>
        <xmin>25</xmin>
        <ymin>25</ymin>
        <xmax>50</xmax>
        <ymax>50</ymax>
      </bndbox>
    </part>
    <part>
      <name>hand</name>
      <bndbox>
        <xmin>50</xmin>
        <ymin>25</ymin>
        <xmax>99</xmax>
        <ymax>99</ymax>
      </bndbox>
    </part>
    <actions>
      <other>1</other>
      <jumping>0</jumping>
      <phoning>1</phoning>
      <playinginstrument>0</playinginstrument>
      <reading>1</reading>
      <ridingbike>0</ridingbike>
      <ridinghorse>1</ridinghorse>
      <running>0</running>
      <takingphoto>1</takingphoto>
      <usingcomputer>0</usingcomputer>
      <walking>0</walking>
    </actions>
  </object>
  <object>
    <name>person</name>
    <pose>Unspecified</pose>
    <truncated>0</truncated>
    <difficult>0</difficult>
    <bndbox>
      <xmin>1</xmin>
      <ymin>1</ymin>
      <xmax>99</xmax>
      <ymax>99</ymax>
    </bndbox>
    <part>
      <name>hand</name>
      <bndbox>
        <xmin>25</xmin>
        <ymin>25</ymin>
        <xmax>50</xmax>
        <ymax>50</ymax>
      </bndbox>
    </part>
    <part>
      <name>hand</name>
      <bndbox>
        <xmin>50</xmin>
        <ymin>25</ymin>
        <xmax>99</xmax>
        <ymax>99</ymax>
      </bndbox>
    </part>
    <actions>
      <other>1</other>
      <jumping>0</jumping>
      <phoning>1</phoning>
      <playinginstrument>0</playinginstrument>
      <reading>1</reading>
      <ridingbike>0</ridingbike>
      <ridinghorse>1</ridinghorse>
      <running>0</running>
      <takingphoto>1</takingphoto>
      <usingcomputer>0</usingcomputer>
      <walking>0</walking>
    </actions>
  </object>
</annotation>

```

## Development
Install
```
npm install
```
Build Library
```
npm run build
```
Run Tests
```
npm run test
```