const Dashboard = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src="https://img.freepik.com/free-vector/cryptocurrency-blockchain-composition-with-people-illustration_275655-526.jpg?w=740" alt="Crptocurrency signal" className='w-[500px] mx-auto my-4' />
                <div className="flex flex-col justify-center">
                    <p className="text-[#574b90] font-bold">TRADE DASHBOARD</p>
                    <h1 class="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Crypto Assets Centrally</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem praesentium 
                        voluptas aspernatur commodi sequi quibusdam odio, beatae facere ipsum, quae 
                        temporibus quod tempore! Doloribus velit ipsa minima nam nemo?
                    </p>
                    <button className="bg-[#574b90] text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3">Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;