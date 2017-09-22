class Api::V1::DogsController < Api::V1::BaseController
  def index
    respond_with Dog.all
  end

  def create
    respond_with :api, :v1, Dog.create(dog_params)
  end

  def destroy
    respond_with Dog.destroy(params[:id])
  end

  def update
    dog = Dog.find(params["id"])
    dog.update_attributes(item_params)
    respond_with item, json: dog
  end

  private

  def dog_params
    params.require(:dog).permit(:id, :name, :tail_wag_rate)
  end
end