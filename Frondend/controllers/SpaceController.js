import request from "request"

export const networkStorageCapacity = async (req,res)=>{
    var options = {
        'method': 'GET',
        'url': 'https://api.spacescope.io/v2/power/network_storage_capacity',
        'headers': {
          'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        // console.log(response.body);
        // var realcapacity = response.body.data.total_qa_bytes_power/1125899906842624;

        const obj = JSON.parse(response.body)

        res.status(200).json(JSON.parse(obj["data"].map((info)=>((info.total_qa_bytes_power/1125899906842624)/1000).toFixed(2))
        ))


      });
}

export const StorageState = async (req,res) =>{
    const options = {
        'method': 'GET',
        'url': 'https://api.spacescope.io/v2/power/storage_state?end_date=2022-07-01&start_date=2022-07-01',
        'headers': {
          'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        res.status(200).send(response.body)
    });
}

export const Rewards = async (req,res) => {
  var options = {
    'method': 'GET',
    'url': 'https://api.spacescope.io/v2/economics/block_reward',
    'headers': {
      'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    const reward_per_wincount = JSON.parse(response.body)

    res.status(200).json(JSON.parse(reward_per_wincount["data"].map((info)=>(info.reward_per_wincount).toFixed(2))))

  });
}

export const powerStorageProvider = async (req,res) => {
    var options = {
        'method': 'GET',
        'url': 'https://api.spacescope.io/v2/storage_provider/power?state_date=2022-12-26&miner_id=f091143',
        'headers': {
          'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        res.status(200).send(response.body)
      });
}

export const GasUsedforSealing = async (req,res) => {
  var options = {
    'method': 'GET',
    'url': 'https://api.spacescope.io/v2/storage_provider/gas/commit_fee?state_date=2022-01-01',
    'headers': {
      'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    // res.send(response.body);
    console.log(response.body);
  });
}

export const costOfSealing = async (req,res) => {
  var options = {
    'method': 'GET',
    'url': 'https://api.spacescope.io/v2/gas/network_fee_per_message',
    'headers': {
      'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    const cost_of_sealing = JSON.parse(response.body)
    res.status(200).send(cost_of_sealing["data"].map((info)=>info.avg_sealing_cost_per_sector))
  });
}

export const costPerSector = async (req,res) => {
  var options = {
    'method': 'GET',
    'url': 'https://api.spacescope.io/v2/economics/sector_economics',
    'headers': {
      'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    const sector_initial_pledge_32gib = JSON.parse(response.body)
    res.json(JSON.parse(sector_initial_pledge_32gib["data"].map((info)=>(info.sector_initial_pledge_32gib).toFixed(2))) )
  });
}

export const messageFee = async (req,res) => {
  var options = {
    'method': 'GET',
    'url': 'https://api.spacescope.io/v2/gas/network_fee_per_message?end_date=2023-01-01&start_date=2023-01-01',
    'headers': {
      'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    // console.log(response.body);
    const message = JSON.parse(response.body)

    res.json(JSON.parse( message["data"].map((info)=>info.avg_precommit_fee_per_message * 1000)))
  });
}
export const gasUsed = async (req,res) => {
  var options = {
    'method': 'GET',
    'url': 'https://api.spacescope.io/v2/gas/network_fee_per_message?end_date=2023-01-01&start_date=2023-01-01',
    'headers': {
      'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    // console.log(response.body);
    const message = JSON.parse(response.body)

    res.json(JSON.parse( message["data"].map((info)=>(info.avg_provecommit_fee_per_message * 1000).toFixed(4))))
  });
}



export const profits = async (req,res) => {
  var options = {
    'method': 'GET',
    'url': 'https://api.spacescope.io/v2/economics/sector_economics',
    'headers': {
      'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    const profits = JSON.parse(response.body)
    res.json(JSON.parse(profits["data"].map((info)=>(info.sector_profit_agg_360d_32gib))) )
  });
}