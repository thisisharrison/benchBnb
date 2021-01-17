class BenchesController < ApplicationController
    # To test AWS
    def show
        @bench = Bench.find(params[:id])
    end

end