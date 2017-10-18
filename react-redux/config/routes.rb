Rails.application.routes.draw do
  resources :static_pages, only: [:about, :home]
  match 'about', to: 'static_pages#about', via: :get
  match 'home', to: 'static_pages#home', via: :get

  resources :articles, only: [:index, :show, :new] do
    member do
      get 'articles/:study_uuid', to: 'articles#show', defaults: { format: :json }
      post 'articles/:new', to: 'articles#new'
    end
  end

  root to: 'static_pages#home', via: :get

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
