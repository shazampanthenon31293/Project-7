<html>
    <button onclick="s1()">Sean</button>
    <?php
    $handle = curl_init('https://enqhf8jl70i8e.x.pipedream.net/');
    
    $data = [
        'Name' => 'Sean',
        'Location' => 
        array (
            'Hemisphere' => 'Western',
            'Continent' => 'North America',
        ),
    ];
    
    $encodedData = json_encode($data);
    
    curl_setopt($handle, CURLOPT_POST, 1);
    curl_setopt($handle, CURLOPT_POSTFIELDS, $encodedData);
    curl_setopt($handle, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    
    $result = curl_exec($handle);
    ?>
</html>