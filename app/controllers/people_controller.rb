class PeopleController < ApplicationController

    # before_action :person, only: [:update, :destroy]

    def index
        render json: Person.all
    end

    def create
        render json: Person.create(people_params) 
    end
    
    def update
        @person = Person.find(params[:id])
        @person.update(people_params)
        render json: @person
    end

    def destroy
        @person = Person.find(params[:id])
        @person.destroy

        render json: { status: 'ok' }
    end

    private

    def people_params
        params.require(:person).permit(:first_name, :last_name)
    end

end
