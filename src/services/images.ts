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
        const response = await Request.fetchRaw({ uri: `images/${id}` });
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }

    public static async Upload(file: File): Promise<Image> {
        const body = new FormData();
        body.append("image", file);

        const response = await Request.fetchRaw({
            uri: 'images/',
            method: 'POST',
            body
        })

        return await Request.apiResponse(response);
    }

}

export default ImagesService;
export type {
    Image
}