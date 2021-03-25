require 'rails_helper'

RSpec.describe Api::V1::ConversationsController, :type => :controller do
    let(:conversation) { create(:conversation) }

    describe "GET #index" do
    subject { get :index }

    it { is_expected.to be_successful }
    it 'returns valid JSON' do
        subject
      puts(response.body, conversation, :conversation, 123)
    end
  end
end
