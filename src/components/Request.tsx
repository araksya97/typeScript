export async function Request(url: string): Promise<any>  {
    return await fetch(url);
}