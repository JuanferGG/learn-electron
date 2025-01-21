import { app, menu } from "electron";

export const setMainMEnu = () => {
    const template = [
        {
            label: 'Markdawn-Label',
            subMenu: [
                {
                    label: 'fuera de aquí',
                    click: () => {
                        app.quit()
                    }
                }
            ]
        }
    ]
}