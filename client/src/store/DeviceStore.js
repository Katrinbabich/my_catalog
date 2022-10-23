import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._devices = []
        this._selectedType ={}
        this._baskets = []
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }

    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }


    setBaskets(basket){
        this._baskets = basket
    }
    get basket() {
        return this._baskets
    }
}
