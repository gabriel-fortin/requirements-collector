type FieldType =
    | { kind: "text", multiLine: boolean, maxCharacters: number | null }
    | { kind: "number", minValue: number | null, maxValue: number | null }
    | { kind: "address" }
    | { kind: "selection", options: string[] }
    | { kind: "other", description: string }
    ;

export default FieldType;
