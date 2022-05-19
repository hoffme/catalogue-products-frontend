import Request from "./request";

interface Image {
    id: string
    size: number
    type: string
    uri: string
    createdAt: Date
}

class ImagesService {

    public static async Get(id: string): Promise<string> {
        const response = await fetch(`${Request.host}images/${id}`);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }

    public static async Upload(file: File): Promise<Image> {
        const body = new FormData();
        body.append("image", file);

        const response = await fetch(`${Request.host}/api/images`, {
            method: 'POST',
            body
        })
        const data = await response.json();
        if (data.error) throw new Error(data.error);

        return data.result;
    }

}

export default ImagesService;
export type {
    Image
}