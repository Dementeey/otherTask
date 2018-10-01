class CompanyWorker {
    constructor(name, post, salary) {
        this.name = name;
        this.post = post;
        this.salary = salary;
    }
}

class Company {
    constructor() {
        this.workers = [];
    }

    addWorkers() {
        for( let i = 0; i < arguments.length; i++ ){
            this.workers.push( arguments[ i ] );
        }
    }

    removeWorker(name) {
        this.workers.forEach(( worker ) => {
            if (worker.name === name) {
                this.workers.splice(this.workers.indexOf(worker), 1);
            }
        });
        return 'remove ' + name
    }

    findWorker( name ) {
        return this.workers.find( worker => worker.name === name );
    }
}



const company = new Company();

company.addWorkers(
    new CompanyWorker( "Peter" , 'Dev', '1000'),
    new CompanyWorker( "John" , 'Designer', '500' ),
    new CompanyWorker( "Mary", 'DevOps', '1000')
);

console.log( company.findWorker( "John" ) );

console.log( company.removeWorker( "John" ) );

console.log( "Check", company.workers );


