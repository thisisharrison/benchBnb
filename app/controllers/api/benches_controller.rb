class Api::BenchesController < ApplicationController
    def index
        @benches = bounds ? Bench.in_bounds(bounds) : Bench.all
        @benches = params[:maxSeating] && params[:minSeating] ? 
            @benches.where(seating: seating_range) : @benches
        render :index
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render json: @bench
        else
            render json: @bench.errors.full_messages, status: 422
        end
    end

    private

    def bench_params
        params.require(:bench).permit(:description, :lat, :lng, :seating)
    end

    def bounds
        params[:bounds]
    end

    def seating_range
        (params[:minSeating]..params[:maxSeating])
    end
end