@benches.each do |bench| 
    json.set! bench.id do 
        json.partial! 'bench', bench: bench
        if bench.photo.attached?
            json.photoUrl url_for(bench.photo)
        end
        json.reviewIds []
    end
end
