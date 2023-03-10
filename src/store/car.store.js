// import { carService } from '../services/car.service'


export const carStore = {
    state: {
        cars: []
    },
    getters: {
        cars({cars}) { return cars },
    },
    mutations: {
        setCars(state, { cars }) {
            state.cars = cars
        },
        addCar(state, { car }) {
            state.cars.push(car)
        },
        updateCar(state, { car }) {
            const idx = state.cars.findIndex(c => c.id === car._id)
            state.cars.splice(idx, 1, car)
        },
        removeCar(state, { carId }) {
            state.cars = state.cars.filter(car => car._id !== carId)
        },
    },
    actions: {
        async addCar(context, { car }) {
            try {
                car = await carService.save(car)
                context.commit(getActionAddCar(car))
                return car
            } catch (err) {
                console.log('carStore: Error in addCar', err)
                throw err
            }
        },
        async updateCar(context, { car }) {
            try {
                car = await carService.save(car)
                context.commit(getActionUpdateCar(car))
                return car
            } catch (err) {
                console.log('carStore: Error in updateCar', err)
                throw err
            }
        },
        async loadCars(context) {
            try {
                const cars = await carService.query()
                context.commit({ type: 'setCars', cars })
            } catch (err) {
                console.log('carStore: Error in loadCars', err)
                throw err
            }
        },
        async removeCar(context, { carId }) {
            try {
                await carService.remove(carId)
                context.commit(getActionRemoveCar(carId))
            } catch (err) {
                console.log('carStore: Error in removeCar', err)
                throw err
            }
        },

    }
}